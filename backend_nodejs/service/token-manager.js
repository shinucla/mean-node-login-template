'use strict';

module.exports = class TokenManager {
  constructor() { /* ... */ }

  ////////////////////////////////////////////////////////////
  
  createTokenEvent(json, callback) {
    var date = new Date();
    Domain.TokenEvent
      .create({ sender_id: json.senderId,
                receiver_id: json.receiverId,
                date: parseInt(new Date().toISOString().slice(0,10).split('-').join('')),
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
		day_of_week: date.getDay(),
                utc: date.getTime(),
		amount: json.amount,
		category_id: json.categoryId,
		description: json.description })
      .then(event => callback(null, event))
      .catch(err => callback(new Error('failed creating token event', 100), null))
    ;
  }

  ////////////////////////////////////////////////////////////

  getChildrenTokenBalance(json, callback) {
    // TBI
  }

  ////////////////////////////////////////////////////////////

  getBalance(json, callback) {
    // TBI
  }

  ////////////////////////////////////////////////////////////
}
