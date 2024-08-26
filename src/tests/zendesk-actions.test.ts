

// const { QorusAuthenticator } = require('@qoretechnologies/ts-toolkit');
const dotenv = require("dotenv")

// USERS

// const getUser = require('../zendesk/actions/users/get-user.ts');
// const createUser = require('../zendesk/actions/users/create-user.ts');
// const getUsers = require('../zendesk/actions/users/get-users.ts');
// const updateUser = require('../zendesk/actions/users/update-user.ts');
// const deleteUser = require('../zendesk/actions/users/delete-user.ts');

// TICKETS

// const creatTicket = require('../zendesk/actions/tickets/create-ticket.ts');
// const getTicketsCount = require('../zendesk/actions/tickets/get-tickets-count.ts');
// const getTicket = require('../zendesk/actions/tickets/get-ticket.ts');
// const getTickets = require('../zendesk/actions/tickets/get-tickets.ts');
// const deleteTicket = require('../zendesk/actions/tickets/delete-ticket.ts');
// const updateTicket = require('../zendesk/actions/tickets/update-ticket.ts');

// GROUPS

// const createGroup = require('../zendesk/actions/groups/create-group.ts');
// const getGroup = require('../zendesk/actions/groups/get-group.ts');
// const getGroups = require('../zendesk/actions/groups/get-groups.ts');
// const deleteGroup = require('../zendesk/actions/groups/delete-group.ts');
// const updateGroup = require('../zendesk/actions/groups/update-group.ts');

// ATTACHMENTS

// const getAttachment = require('../zendesk/actions/attachments/get-attachment.ts');
// const deleteAttachment = require('../zendesk/actions/attachments/delete-attachment.ts');

// Organizations

// const createOrganization = require('../zendesk/actions/organizations/create-organization.ts');
// const getOrganizations = require('../zendesk/actions/organizations/get-organizations.ts');
// const getOrganization = require('../zendesk/actions/organizations/get-organization.ts');
// const updateOrganization = require('../zendesk/actions/organizations/update-organization.ts');
// const deleteOrganization = require('../zendesk/actions/organizations/delete-organization.ts');


dotenv.config();
if (!(process.env.ENDPOINT && process.env.TESTUSER && process.env.TESTPASS)) {
  throw new Error('Missing required environment variables');
}

describe('tickets', () => {

  // let newTicket: any = null

  // it('should create a ticket', async () => {
  //   const createTicketAction = await creatTicket.default.app_function;
  //   newTicket = await createTicketAction({
  //     "ticket": {
  //       "comment": {
  //         "body": "The smoke is very colorful."
  //       },
  //       "priority": "urgent",
  //       "subject": "My printer is on fire!"
  //     }
  //   }
  // )
  // });

  // it('should fetch a tickets count', async () => {
  //   const fetchTicketsCountAction = await getTicketsCount.default.app_function;
  //   console.log(await fetchTicketsCountAction())
  // })

  // it('should fetch a ticket', async () => {
  //   const fetchTicket = await getTicket.default.app_function;
  //   console.log(await fetchTicket({ ticket_id: 150 }))
  // });

  // it('should fetch a tickets', async () => {
  //   const fetchTicketsAction = await getTickets.default.app_function;
  //   console.log(await fetchTicketsAction({ ids: newTicket.ticket.id + '' }))
  // });

  // it('should update a ticket', async () => {
  //   const updateTicketAction = await updateTicket.default.app_function;
  //   console.log(await updateTicketAction({ticket_id: 150, status: "solved"} ))

  // });

  // it('should delete a ticket', async () => {
  //   const deleteTicketAction = await deleteTicket.default.app_function;
  //   console.log(await deleteTicketAction({ ticket_id: newTicket.ticket.id }))
  // })

});

describe('groups', () => {
  // let newGroup: any = null;
  // it('should create a group', async () => {
  //   const createGroupAction = await createGroup.default.app_function;
  //   newGroup = await createGroupAction({ "name": String(new Date().getTime()) })
  // });

  // it('should fetch a group', async () => {
  //   const getGroupAction = await getGroup.default.app_function;
  //   console.log(await getGroupAction({ id: newGroup.group.id }))
  // });

  // it('should fetch a groups', async () => {
  //   const getGroupsAction = await getGroups.default.app_function;
  //   console.log(await getGroupsAction())
  // });

  //   it('should update a groups', async () => {
  //   const updateGroupAction = await updateGroup.default.app_function;
  //   console.log(await updateGroupAction({ id: newGroup.group.id , name:"Interesting Group"} ))
  // });


  // it('should delete a group', async () => {
  //   const deleteGroupAction = await deleteGroup.default.app_function;
  //   console.log(await deleteGroupAction({ id: newGroup.group.id }))
  // })

  // console.log('newGroup => ', newGroup)
})

describe('attachments', () => {
  // let attachment_id: any = 2;
  // let attachment_token:any = " "
  //   it('should fetch a attachment', async () => {
  //     const getAttachmentAction = await getAttachment.default.app_function;
  //     console.log(await getAttachmentAction({ id: attachment_id}))
  //   });

  //    it('should delete a attachment', async () => {
  //     const deleteAttachmentAction = await deleteAttachment.default.app_function;
  //     console.log(await deleteAttachmentAction({token: attachment_token}) )
  //   })
});

describe('organizations', () => {
  // let newOrganization: any = null

  // it('should create a organization', async () => {
  //   const createOrganizationAction = await createOrganization.default.app_function;
  //   newOrganization = await createOrganizationAction({
  //     "organization": {
  //       "name": `My Organization ${new Date().getTime()}`
  //     }
  //   });
  //   console.log('newOrganization => ', newOrganization)
  // })

  // it('should fetch a organizations', async () => {
  //   const getOrganizationsAction = await getOrganizations.default.app_function;
  //   console.log(await getOrganizationsAction())
  // })

  // it('should fetch a organization', async () => {
  //   const fetchOrganizations = await getOrganization.default.app_function;
  //   console.log(await fetchOrganizations({ id: newOrganization.organization.id }))
  // });

  // it('should update a organization', async () => {
  //   const updateOrganizationAction = await updateOrganization.default.app_function;
  //   console.log(await updateOrganizationAction({
  //     id: newOrganization.organization.id,
  //     organization: { notes: "Something interesting" }
  //   }))
  // })

  // it('should delete a organization', async () => {
  //   const deleteOrganizationAction = await deleteOrganization.default.app_function;
  //   console.log(await deleteOrganizationAction({ id: newOrganization.organization.id }))
  // })



})

describe('users', () => {
  // let newUser: any = null

  // it('should create a user', async () => {
  //     const createUserAction = await createUser.default.app_function;
  //     newUser= await createUserAction(
  //       {
  //       "user": {
  //         "name": `My User${new Date().getTime()}`
  //       }
  //     }
   
   
  //   );
  //     console.log('newUser => ', newUser)
  //   })

  // it('should fetch a users', async () => {
  //   const getUserAction = await getUsers.default.app_function;
  //   console.log(await getUserAction())
  // })

  // it('should fetch a user', async () => {
  //   const fetchUsers = await getUser.default.app_function;
  //   console.log('newUser => ', newUser)
    
  //   console.log(await fetchUsers({ id: newUser.user.id}))
  // });

  // it('should update a user', async () => {
  //   const updateUserAction = await updateUser.default.app_function;
  //   console.log(await updateUserAction({
  //     id: newUser.user.id,
  //    name: "New Name" 
  //   }))
  //   console.log('newUser updated  => ', newUser)
  // })

  // it('should delete a user', async () => {
  //   const deleteUserAction = await deleteUser.default.app_function;
  //   console.log(await deleteUserAction({ id: newUser.user.id}))
  // })



})