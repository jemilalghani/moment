module.exports = {
    addToOrders: (req,res) => {
        const db = req.app.get('db');
        const {exp_id, prof_id, group_size} = req.body;
        db.add_to_orders([exp_id, prof_id, group_size])
        .then(order => {
            res.status(200).send(order)
        })
    },

    getOrders: (req,res) => {
        let orders = {};
        const db = req.app.get('db');
        db.get_orders(req.params.id)
        .then(order => {
            console.log('orderssssssssoo', order)
            orders = Object.assign(order, {})
        })
        .then( (data) => {
            db.get_photo_orders([req.params.id]).then(photo => {
              console.log('controller photo orders',photo)
              console.log('addphotos', addPhotosToMoment(orders, photo))
              res.json(addPhotosToMoment(orders, photo))
          })
      })
    }
}

function addPhotosToMoment (resMoment, resPhoto){
    console.log('-----------hit')
    const photoFn = function () {
      let newArr = [];
      for (let i = 0; i < resPhoto.length; i ++){
        let ph_str = resPhoto[i].row;
        // console.log('i is,', i, 'ph_str is', ph_str)
        ph_str = ph_str.slice(1, ph_str.length-1)
        // console.log('i is,', i, 'ph_str is', ph_str)
        ph_str = ph_str.split(',')
        // console.log('i is,', i, 'ph_str is', ph_str)
        newArr.push(ph_str)
      }
       console.log('newArr', newArr)
      return newArr
    }
    let newPhoto = photoFn()
    function addPhotos () {
      for (let i = 0; i < resMoment.length; i ++){
          console.log('forloppppp res', resMoment)
        let photoArr = [];
        let m_id = resMoment[i]['id']
        // console.log(moment[i]['id'])
        //looping through moment arr, one array item at a time
        for (let j = 0; j < newPhoto.length; j ++){
          let ph = newPhoto[j]
          // console.log('m_id is;', m_id, 'ph[0] is', ph[0])
          //looping through photo arr, one photo at a time
          if (m_id === parseInt(ph[0])){
            // console.log('got a match, m_id', m_id, 'ph', ph[0])
            // console.log('ph[2] is',ph[2])
            photoArr.push(ph[2])
          }
        }
        Object.assign(resMoment[i], {photos: photoArr})
      }
      console.log('resmoment', resMoment)
      return resMoment;
      
    }
    addPhotos();
    return resMoment;
}