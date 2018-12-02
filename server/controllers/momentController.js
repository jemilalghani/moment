module.exports = {
  addDummy:(req,res)=>{
    const db = req.app.get('db');
    const { title, category, duration, price, locale, hostQualification, meetingLocation, whatWeWillDo, whereWeWillBe, availableStartTime,availableEndTime, deleted, locale_google, highlight, photoOne, photoTwo, photoThree, availableDate } = req.body;
    const userId = 1; //(USER)
    db.add_moment([title, category, duration, price, locale, hostQualification, meetingLocation, whatWeWillDo, whereWeWillBe, availableStartTime,availableEndTime, deleted, locale_google, highlight])
      .then( () => {
        db.add_photo([res.data.id, photoOne, photoTwo, photoThree])
          .then( (photos) => {
              res.json(photos)
        db.add_available_date([res.data.id, availableDate])
        .then( (date) => {
          res.json(date)
        db.add_moment_creator([userId, res.data.id])
        .then( (creator) => {
          res.json(creator)
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
  create: (req,res)=>{
    db.add_moment([]).then(() => {
    }), //RETURN ID FOR NEXT 2 POSTS
    db.add_photos([]).then(() => {
    }),
    db.add_available_dates([]).then(() => {
    }),
    db.add_moment_creator([]).then(() => {
    })
  },
  hostFind: (req,res)=>{
  },
  findId: (req,res)=>{
  },
  findHighlight: (req,res)=>{
      const db = req.app.get('db');
          db.get_moment_highlight([true]).then(() => {
              res.json({ moment: res.data.moment })
          }).catch(error => {
              console.log('error', error);
              res.status(500).json({ message: 'Find Highlight Moment Failed'})
          });
  },
  findLocale:  (req,res)=>{
    const {locale} = req.body;
    const db = req.app.get('db');
    db.get_moment_locale([true]).then(() => {
        res.json({ moment: res.data.moment })
    }).catch(error => {
        console.log('error', error);
        res.status(500).json({ message: 'Find Highlight Moment Failed'})
    });
  }
}