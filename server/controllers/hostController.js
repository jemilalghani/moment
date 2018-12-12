module.exports = {
  getCreatorMoments: (req, res) => {
    let moment = {};
    const db = req.app.get("db");
    db.get_creator_moments(req.params.id).then(info => {
      moment = Object.assign(info, {});
      db.get_photo_host(info[0].prof_id).then(photo => {
        // console.log(photo);
        res.json(addPhotosToMoment(moment, photo));
      });
    });
  }
};
function addPhotosToMoment(resMoment, resPhoto) {
  const photoFn = function() {
    let newArr = [];
    for (let i = 0; i < resPhoto.length; i++) {
      let ph_str = resPhoto[i].row;
      // console.log('i is,', i, 'ph_str is', ph_str)
      ph_str = ph_str.slice(1, ph_str.length - 1);
      // console.log('i is,', i, 'ph_str is', ph_str)
      ph_str = ph_str.split(",");
      // console.log('i is,', i, 'ph_str is', ph_str)
      newArr.push(ph_str);
    }
    return newArr;
  };
  let newPhoto = photoFn();
  function addPhotos() {
    for (let i = 0; i < resMoment.length; i++) {
      let photoArr = [];
      let m_id = resMoment[i]["id"];
      for (let j = 0; j < newPhoto.length; j++) {
        let ph = newPhoto[j];
        if (m_id === parseInt(ph[0])) {
          photoArr.push(ph[2]);
        }
      }
      Object.assign(resMoment[i], { photos: photoArr });
    }
    return resMoment;
  }
  addPhotos();
  return resMoment;
}
