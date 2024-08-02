import * as dotenv from "dotenv";
dotenv.config();
import * as express from 'express';
import zendeskActions from "./zendesk";
import { getConvertedAcionsForQorus } from "./global/helpers";

// Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 6000

const returnConvertedActionsForQorus = () => {
	const actions = {
		// here the all need actions
		zendesk: zendeskActions
	}
	return getConvertedAcionsForQorus({actions});
}

async function start() {
	try {
		app.listen(PORT, () => {
			// console.log(returnConvertedActionsForQorus())
			console.log(`API is running on port ${PORT}!`);
		});
	} catch (error) {
		console.log(error);
	}
}

start()