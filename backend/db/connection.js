import {connect,disconnect} from 'mongoose'
import {config} from "dotenv"
config();

async function connectDatabase(){
    try{
        await connect();
    }
}