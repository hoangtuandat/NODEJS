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

module.exports = {
  gethomePage: gethomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
};
