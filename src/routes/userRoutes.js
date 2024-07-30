import express from "express";
import {
  blockUser,
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/userController";

const router = express.Router();

// get
// base/users/get-all
// base/users/create
// base/users/get-single/:id
// base/users/update/:id
// base/users/delete/:id

// base/users
router.route("/").post(createUser).get(getUsers);

// base/users/:id
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

router.route("/block").put(blockUser);

export { router };
