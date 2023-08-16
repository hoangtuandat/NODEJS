import db from "../models/index";
import CRUDService from "../services/CRUDService";

let gethomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", {
        data: JSON.stringify(data)
    });
  } catch (e) {
    console.log(e);
  }
};

let getCRUD = (req, res) => {
  return res.render("crud.ejs")
}

let postCRUD = async(req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("Post crud")
}

let displayCRUD = async(req, res) => {
  let data = await CRUDService.getAllUser();
  // console.log(data)

  return res.render('displayCRUD.ejs', {
    dataTable: data
  })
}

let getEditCRUD = async(req, res) => {

  let userId = req.query.id;
  if(userId) {
    let userData = await CRUDService.getUserInfoById(userId);
    // console.log(userData);
    return res.render('editCRUD.ejs', {
      user: userData
    })
  } else {
    return res.send('Not found user')
  }

  
}

let putCRUD = async (req, res) => {
  let data = req.body;
  await CRUDService.updateUserData(data);
  return res.send("updated")
}

module.exports = {
  gethomePage: gethomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  displayCRUD: displayCRUD,
  getEditCRUD : getEditCRUD,
  putCRUD: putCRUD,
};
