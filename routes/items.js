const { getItems, getItem, addItem } = require("../controllers/items");

// Item schema
const Item = {
  type: "object",
  properties: {
    id: { type: "string" },
    name: { type: "string" }
  }
};

// Options for getting all items
const getItemsOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: Item
      }
    }
  },
  handler: getItems
};

// Options for getting one item
const getItemOpts = {
  schema: {
    response: {
      200: Item
    }
  },
  handler: getItem
};

// Options for adding one item
const postItemOpts = {
  schema: {
    response: {
      201: Item
    }
  },
  handler: addItem
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get("/items", getItemsOpts);

  // Get single item
  fastify.get("/items/:id", getItemOpts);

  // Add item
  fastify.post("/items", postItemOpts);

  done();
}

module.exports = itemRoutes;
