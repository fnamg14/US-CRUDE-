const express = require('express');
const router = express.Router();
const signalsController = require('../controllers/signalsController');

router.post('/oil', signalsController.generateOILSignals);
router.get('/upcoming', signalsController.getUpcomingSignals);
router.post('/clear-cache', signalsController.clearCache);

if (typeof signalsController.getCacheStatus === 'function') {
  router.get('/status', signalsController.getCacheStatus);
}

if (typeof signalsController.forceRefresh === 'function') {
  router.post('/refresh', signalsController.forceRefresh);
}

module.exports = router;
