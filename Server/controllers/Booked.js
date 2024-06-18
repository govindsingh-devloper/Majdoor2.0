const Order = require('../models/BookedService');


exports.createOrder = async (req, res) => {
  try {
    const {
      address,
      city,
      state,
      country,
      pincode,
      phoneNumber,
      street,
      email,
      firstName,
      service,
      user,
    } = req.body;


    const newOrder = new Order({
      address,
      city,
      state,
      country,
      pincode,
      phoneNumber,
      street,
      email,
      firstName,
      service,
      user,
    });


    await newOrder.save();
    res.status(201).json({ success: true, message: 'Order created successfully', order: newOrder });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ success: false, message: 'Failed to create order', error });
  }
};

