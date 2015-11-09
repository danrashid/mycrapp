'use strict';

var express = require('express');
var router = express.Router();

var mocks = [
  {
    guid: 'tvn3dgr3',
    name: 'The First Thing',
    description: 'The description for the First Thing'
  },
  {
    guid: 't4y3dc7u',
    name: 'The Second Thing',
    description: 'The description for the Second Thing'
  },
  {
    guid: 'tviplhys',
    name: 'The Third Thing',
    description: 'The description for the Third Thing'
  }
];

function getRandomElement(array) {
  var index = Math.floor(Math.random() * array.length);

  return array[index];
}

function makeGuid() {
  var chars = '1234567890qwertyuiopasdfghjklzxcvbnm',
    guid = 't';

  while(guid.length < 8) {
    guid += getRandomElement(chars);
  }

  return guid;
}

function getIndexOf(guid) {
  var index;

  mocks.some(function (mock, i) {
    if (mock.guid === guid) {
      index = i;
      return true;
    }
    return false;
  });

  return index;
}

function lookup(guid) {
  return mocks[getIndexOf(guid)];
}

router.get('/things', function(req, res, next) {
  setTimeout(function () {
    res.send(mocks);
  }, 1000);
});

router.post('/things', function(req, res, next) {
  setTimeout(function () {
    var mock = {
      guid: makeGuid(),
      name: req.body.name,
      description: req.body.description
    };

    mocks.push(mock);
    res.send(mock);
  }, 1000);
});

router.get('/things/:guid', function(req, res, next) {
  setTimeout(function () {
    res.send(lookup(req.params.guid));
  }, 1000);
});

router.put('/things/:guid', function(req, res, next) {
  setTimeout(function () {
    var mock = lookup(req.params.guid);

    mock.name = req.body.name;
    mock.description = req.body.description;
    res.send(mock);
  }, 1000);
});

router.delete('/things/:guid', function(req, res, next) {
  setTimeout(function () {
    mocks.splice(getIndexOf(req.params.guid), 1);
    res.sendStatus(200);
  }, 1000);
});

module.exports = router;
