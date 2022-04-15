const { registerUser, login, logout, poemform, myProfile } = require('../controller/User');
const { createPoem, getPoems, getMyPoems, deletePoem, editPoem } = require('../controller/Poem');
const { isAuthedUser } = require('../middleware/Auth')
const express = require('express');

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(login);
router.route('/logout').get(isAuthedUser, logout);
router.route('/myProfile').get(isAuthedUser, myProfile);

router.route('/poemform').get(isAuthedUser, poemform);
router.route('/createPoem').post(isAuthedUser, createPoem);
router.route('/getPoems').get(getPoems);
router.route('/me').get(isAuthedUser, getMyPoems);
router.route('/deletePoem/:id').delete(isAuthedUser, deletePoem);
router.route('/editPoem/:id').put(isAuthedUser, editPoem);


module.exports = router;
