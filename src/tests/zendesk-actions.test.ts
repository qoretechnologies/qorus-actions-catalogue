
// const { QorusAuthenticator } = require('@qoretechnologies/ts-toolkit');
const dotenv = require("dotenv")

const getUser = require('../zendesk/actions/users/get-user.ts');
const creatTicket = require('../zendesk/actions/tickets/create-ticket.ts');
const getTicket = require('../zendesk/actions/tickets/get-ticket.ts');
// const deleteTicket = require('../zendesk/actions/tickets/delete-ticket.ts');
// const updateTicket = require('../zendesk/actions/tickets/update-ticket.ts');

dotenv.config();
if (!(process.env.ENDPOINT && process.env.TESTUSER && process.env.TESTPASS)) {
  throw new Error('Missing required environment variables');
}

describe('test', () => {


  // USERS

  it('should fetch user data successfully', async () => {
    const userId = 15176321074716;
    const fetchUser = await getUser.default.app_function;
    console.log(await fetchUser({ userId }))
  });

  // TICKETS

  it('should create a ticket', async () => {
    const createTicketAction = await creatTicket.default.app_function;
    console.log(await createTicketAction({
      "comment": {
        "body": "The smoke is very colorful."
      },
      "priority": "urgent",
      "subject": "My printer is on fire!"
    }))
  });

  it('should fetch a ticket', async () => {
    const ticket_id = 4;
    const fetchTicket = await getTicket.default.app_function;
    console.log(await fetchTicket({ ticket_id }))
  });


  // it('should delete a ticket', async () => {
  //   const deleteTicketAction = await deleteTicket.default.app_function;
  //   console.log(await deleteTicketAction({ ticket_id: 84 }))
  // })

  // it('should update a ticket', async () => {
  //   const updateTicketAction = await updateTicket.default.app_function;
  //   console.log(await updateTicketAction({id: 44, ticket: {
  //     "comment": {
  //       "body": "Thanks for choosing Acme Jet Motors.",
  //       "public": true
  //     },
  //     "custom_status_id": 15176312276252,
  //     "status": "solved"
  //   }}
  //   ))
  // });

});

