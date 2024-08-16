

// const { QorusAuthenticator } = require('@qoretechnologies/ts-toolkit');
const dotenv = require("dotenv")

// USERS

// const getUser = require('../zendesk/actions/users/get-user.ts');

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

// const createAttachment = require('../zendesk/actions/attachments/create-attachment.ts');
// const getAttachment = require('../zendesk/actions/attachments/get-attachment.ts');
// const deleteAttachment = require('../zendesk/actions/attachments/delete-attachment.ts');

// Organizations

const createOrganization = require('../zendesk/actions/organizations/create-organization.ts');
const getOrganizations = require('../zendesk/actions/organizations/get-organizations.ts');
const getOrganization = require('../zendesk/actions/organizations/get-organization.ts');
const updateOrganization = require('../zendesk/actions/organizations/update-organization.ts');
const deleteOrganization = require('../zendesk/actions/organizations/delete-organization.ts');

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
  //   console.log(await fetchTicket({ ticket_id: 146 }))
  // });

  // it('should fetch a tickets', async () => {
  //   const fetchTicketsAction = await getTickets.default.app_function;
  //   console.log(await fetchTicketsAction({ ids: newTicket.ticket.id + '' }))
  // });

  // it('should update a ticket', async () => {
  //   const updateTicketAction = await updateTicket.default.app_function;
  //   console.log(await updateTicketAction({ticket_id: 146, status: "solved"} ))
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

  // it('should create a attachment', async () => {
  // const createAttachmentAction = await createAttachment.default.app_function;
  //    await createAttachmentAction({
  //     "content_type": "image/png",
  //     "content_url": "https://company.zendesk.com/attachments/my_funny_profile_pic.png",
  //     "file_name": "my_funny_profile_pic.png",
  //     "size": 166144,
  //     "thumbnails": [
  //       {
  //         "content_type": "image/png",
  //         "content_url": "https://company.zendesk.com/attachments/my_funny_profile_pic_thumb.png",
  //         "file_name": "my_funny_profile_pic_thumb.png",
  //         "size": 58298
  //       }
  //     ]
  //   })
  // });

  //   it('should fetch a attachment', async () => {
  //     const getAttachmentAction = await getAttachment.default.app_function;
  //     console.log(await getAttachmentAction({ attachment_id: newAttachment.id + '' }))
  //   });

  //    it('should delete a attachment', async () => {
  //     const deleteAttachmentAction = await deleteAttachment.default.app_function;
  //     console.log(await deleteAttachmentAction({ attachment_id: newAttachment.attachment_id }))
  //   })

  //   console.log('newAttachment => ', newAttachment)
});

describe('organizations', () => {
  let newOrganization: any = null

  it('should create a organization', async () => {
    const createOrganizationAction = await createOrganization.default.app_function;
    newOrganization = await createOrganizationAction({
      "organization": {
        "name": `My Organization ${new Date().getTime()}`
      }
    });
    console.log('newOrganization => ', newOrganization)
  })

  it('should fetch a organizations', async () => {
    const getOrganizationsAction = await getOrganizations.default.app_function;
    console.log(await getOrganizationsAction())
  })

  it('should fetch a organization', async () => {
    const fetchOrganizations = await getOrganization.default.app_function;
    console.log(await fetchOrganizations({ id: newOrganization.organization.id }))
  });

  it('should update a organization', async () => {
    const updateOrganizationAction = await updateOrganization.default.app_function;
    console.log(await updateOrganizationAction({
      id: newOrganization.organization.id,
      organization: { notes: "Something interesting" }
    }))
  })

  it('should delete a organization', async () => {
    const deleteOrganizationAction = await deleteOrganization.default.app_function;
    console.log(await deleteOrganizationAction({ id: newOrganization.organization.id }))
  })

  describe('users', () => {
    // it('should fetch user data successfully', async () => {
    //   const userId = 15176321074716;
    //   const fetchUser = await getUser.default.app_function;
    //   console.log(await fetchUser({ userId }))
    // });
  })

})