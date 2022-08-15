const express = require('express');
const router = express.Router();
const Pizza = require('../model/pizzaModel');

router.get('/getAllPizzas', async (req, res) => {
    try {
        const pizzas = await Pizza.find({});
        res.send(pizzas);
    } catch(err) {
        res.json({message: err});
        console.log(err);
    }
});


router.post('/addpizza', async (req, res) => {
    if(!req.body.name || !req.body.prices.small || !req.body.prices.medium || !req.body.prices.large || !req.body.category || !req.body.image || !req.body.description) {
        return res.json({error: "Please enter all fields."});
    }

    try {
        const addNewPizza = new Pizza({
            name: req.body.name,
            varients: ['small', 'medium', 'large'],
            prices: [
                {
                    small: Number(req.body.prices.small),
                    medium: Number(req.body.prices.medium),
                    large: Number(req.body.prices.large),
                },
            ],
            category: req.body.category,
            image: req.body.image,
            description: req.body.description
        });

        await addNewPizza.save();

        res.json({message: 'Pizza Added Successfully.'});
    } catch(err) {
        res.json({error: err});
        console.log(err);
    }
});


router.delete('/delete-pizza/:id', async (req, res) => {
    try {
        const pizzaFound = await Pizza.findOneAndDelete({_id: req.params.id});
        const updatedPizzas = await Pizza.find({});
        if(pizzaFound) {
            res.json({message: 'Pizza Deleted Successfully.', updatedPizzas: updatedPizzas});
        }
        else {
            res.json({error: 'Pizza Not Found.'});
        }
    } catch(err) {
        res.json({error: err});
        console.log(err);
    }
});


router.get('/get-pizza-by-id/:id', async (req, res) => {
    try {
        //console.log(req.params.id);
        const pizza = await Pizza.findOne({_id: req.params.id});
        if(pizza) {
            res.send(pizza);
        }
        else {
            res.json({error: 'Pizza Not Found'})
        }
    } catch(err) {
        res.json({error: err});
        console.log(err);
    }
});


router.post('/editpizza', async (req, res) => {
    if(!req.body.name || !req.body.prices.small || !req.body.prices.medium || !req.body.prices.large || !req.body.category || !req.body.image || !req.body.description) {
        return res.json({error: "Please enter all fields."});
    }

    try {

        const editedPizzaDetails = {
            name: req.body.name,
            varients: ['small', 'medium', 'large'],
            prices: [
                {
                    small: Number(req.body.prices.small),
                    medium: Number(req.body.prices.medium),
                    large: Number(req.body.prices.large),
                },
            ],
            category: req.body.category,
            image: req.body.image,
            description: req.body.description
        }

        const edited = await Pizza.findOneAndUpdate({_id: req.body._id}, editedPizzaDetails);

        if(edited) {
            res.json({message: 'Pizza Updated Successfully.'});
        }
        else {
            res.json({error: 'Error occured in updating details. Please try again!'});
        }

    } catch(err) {
        res.json({error: err});
        console.log(err);
    }
});


module.exports = router;