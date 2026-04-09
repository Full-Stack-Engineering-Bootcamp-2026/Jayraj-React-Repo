
import { configureStore } from "@reduxjs/toolkit";
import { carsReduce , addCar , removeCar , changeSearchTerm } from "./slice/carsSlice";
import { formReducer , changeName , changeCost } from "./slice/formSlice";


const store = configureStore({
    reducer:{
        cars: carsReduce,
        form: formReducer
    }
})

export{
    store,
    changeName,
    changeCost,
    addCar,
    removeCar,
    changeSearchTerm
};
