const { registerUser, login, logout, poemform, myProfile, forgotPassword, resetPassword } = require('../controller/User');
const { createPoem, getPoems, getMyPoems, addCommentInPoem, likeDislikePoem, deletePoem, editPoem, searchPoemByTags } = require('../controller/Poem');
const { isAuthedUser } = require('../middleware/Auth')
const express = require('express');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/logout').get(isAuthedUser, logout);
router.route('/myProfile').get(isAuthedUser, myProfile);
router.route("/forgot/password").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);


router.route('/poemform').get(isAuthedUser, poemform);
router.route('/createPoem').post(isAuthedUser, createPoem);
router.route('/getPoems').get(getPoems);
router.route('/me').get(isAuthedUser, getMyPoems);
router.route('/deletePoem/:id').delete(isAuthedUser, deletePoem);
router.route('/editPoem/:id').put(isAuthedUser, editPoem);
router.route('/likeDislikePoem/:id').put(isAuthedUser, likeDislikePoem);
router.route('/addComment/:id').put(isAuthedUser, addCommentInPoem);
router.route('/search').post(searchPoemByTags);


module.exports = router;
