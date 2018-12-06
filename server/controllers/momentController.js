module.exports = {
  addDummy:(req,res)=>{
    const db = req.app.get('db');
    const { title, category, duration, price, locale, hostQualification, meetingLocation, whatWeWillDo, whereWeWillBe, availableStartTime,availableEndTime, deleted, groupSize, highlight, photoOne, photoTwo, availableDate } = req.body;
    const userId = 1; //(USER)
    db.add_moment([title, category, duration, price, locale, hostQualification, meetingLocation, whatWeWillDo, whereWeWillBe, availableStartTime,availableEndTime, deleted, groupSize, highlight])
      .then( (data) => {

        db.add_photo([data[0].id, photoOne, photoTwo])
          .then( (photos) => {
            console.log(photos)
          }).catch((error)=>{
            console.log('error in photo', error)
          })

        db.add_available_date([data[0].id, availableDate])
          .then( (date) => {
            console.log(date)
          }).catch((error)=>{
            console.log('error in date', error)
          })

        db.add_moment_creator([userId, data[0].id])
          .then( (creator) => {
            console.log(creator)
          }).catch((error)=>{
            console.log('error in creator', error)
          })
        })

      .catch( error => {
        console.log('error', error);
        res.status(500).json({ message: 'Add Moment Failed'})
    });
    
    // .then(() => {
    //   res.json({ moment: res.data }).catch(error => {
    //     console.log('error', error);
    //     res.status(500).json({ message: 'Add Moment Failed'})
    // });
    // db.add_photos([]).then(() => {
    // }),
    // }), //RETURN ID FOR NEXT 2 POSTS
    // db.add_available_dates([]).then(() => {
    // }),
    // db.add_moment_creator([]).then(() => {
    // })
    // addMoment()
    // .then(addPhotos)
    // .then(addDates)
    // .then(addCreators)

  },
//   create: (req,res)=>{
//     db.add_moment([]).then(() => {
//     }), //RETURN ID FOR NEXT 2 POSTS
//     db.add_photos([]).then(() => {
//     }),
//     db.add_available_dates([]).then(() => {
//     }),
//     db.add_moment_creator([]).then(() => {
//     })
//   },
//   hostFind: (req,res)=>{
//   },
//   findId: (req,res)=>{
//   },
  findHighlight: (req,res) =>{
      let moment = {};
      const db = req.app.get('db');
          db.get_moment_highlight().then(exp => {
              console.log('controller moment higlight',exp)
              moment = Object.assign(exp, {})
              // res.json(moment)
          })
          .then( (data) => {
          db.get_photo_highlight().then(photo => {
            console.log('controller photo highlight',photo)
            res.json(addPhotosToMoment(moment, photo))
        })
      })
          .catch(error => {
              console.log('error', error);
              res.status(500).json({ message: 'Find Highlight Moment Failed'})
          });
  },
  findLocale:  (req,res)=>{
    // const {locale} = req.body;
    const db = req.app.get('db');
    db.get_moment_locale(['Phoenix, AZ']).then(() => {
        res.json({ moment: res.data.moment })
    }).catch(error => {
        console.log('error', error);
        res.status(500).json({ message: 'Find Highlight Moment Failed'})
    });
  }
}

function addPhotosToMoment (resMoment, resPhoto){
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
    // console.log('newArr', newArr)
    return newArr
  }
  let newPhoto = photoFn()
  function addPhotos () {
    for (let i = 0; i < resMoment.length; i ++){
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
    return resMoment;
  }
  addPhotos();
  return resMoment;
}