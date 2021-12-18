const {
  getItems,
  getItem,
  addItem,
  updateItem,
  deleteItem
} = require("../controllers/items");

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
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: { type: "string" }
      }
    },
    response: {
      201: Item
    }
  },
  handler: addItem
};

// Options for updating an item
const updateItemOpts = {
  schema: {
    response: {
      200: Item
    }
  },
  handler: updateItem
};

// Options for deleting an item
const deleteItemOpts = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: { type: "string" }
        }
      }
    }
  },
  handler: deleteItem
};

function itemRoutes(fastify, options, done) {
  // Get all items
  fastify.get("/items", getItemsOpts);

  // Get single item
  fastify.get("/items/:id", getItemOpts);

  // Add item
  fastify.post("/items", postItemOpts);

  fastify.put("/items/:id", updateItemOpts);

  // Delete item
  fastify.delete("/items/:id", deleteItemOpts);

  done();
}

module.exports = itemRoutes;
