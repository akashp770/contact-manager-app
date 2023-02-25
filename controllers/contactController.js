// @desc Get all Contact
// @route Get /api/contacts
// @access public
const getContacts = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};

// @desc Create New Contact
// @route Post /api/contacts
// @access public
const createContact = (req, res) => {
  res.status(201).json({ message: "Create Contact" });
};

// @desc Get Contact
// @route GEt /api/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({ message: `Get contacts for ${req.params.id}` });
};

// @desc Update Contact
// @route Update /api/contacts/:id
// @access public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

// @desc Delete Contact
// @route Delete /api/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};
module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
