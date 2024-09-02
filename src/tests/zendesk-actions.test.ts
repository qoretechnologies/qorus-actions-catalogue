const dotenv = require('dotenv');

// USERS

const getUser = require('../zendesk/actions/users/get-user.ts');
const createUser = require('../zendesk/actions/users/create-user.ts');
const getUsers = require('../zendesk/actions/users/get-users.ts');
const updateUser = require('../zendesk/actions/users/update-user.ts');
const deleteUser = require('../zendesk/actions/users/delete-user.ts');

// TICKETS

const creatTicket = require('../zendesk/actions/tickets/create-ticket.ts');
const getTicketsCount = require('../zendesk/actions/tickets/get-tickets-count.ts');
const getTicket = require('../zendesk/actions/tickets/get-ticket.ts');
const getTickets = require('../zendesk/actions/tickets/get-tickets.ts');
const deleteTicket = require('../zendesk/actions/tickets/delete-ticket.ts');
const updateTicket = require('../zendesk/actions/tickets/update-ticket.ts');

// GROUPS

const createGroup = require('../zendesk/actions/groups/create-group.ts');
const getGroup = require('../zendesk/actions/groups/get-group.ts');
const getGroups = require('../zendesk/actions/groups/get-groups.ts');
const deleteGroup = require('../zendesk/actions/groups/delete-group.ts');
const updateGroup = require('../zendesk/actions/groups/update-group.ts');

// ATTACHMENTS

const createAttachment = require('../zendesk/actions/attachments/create-attachhment.ts');
const getAttachment = require('../zendesk/actions/attachments/get-attachment.ts');
const deleteAttachment = require('../zendesk/actions/attachments/delete-attachment.ts');

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
  let newTicket: any = null;

  it('should create a ticket', async () => {
    const createTicketAction = await creatTicket.default.api_function;
    newTicket = await createTicketAction({
      ticket: {
        comment: {
          body: 'The smoke is very colorful.',
        },
        priority: 'urgent',
        subject: 'My printer is on fire!',
      },
    });
    const { response_type } = creatTicket;
    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(newTicket).toBeDefined();
        expect(newTicket.ticket).toBeDefined();
        expect(newTicket.ticket).toHaveProperty(key);
      });
    } else {
      console.error('response_type is undefined or null');
    }
  });

  it('should fetch a tickets count', async () => {
    const fetchTicketsCountAction = await getTicketsCount.default.api_function;
    const ticketscount = await fetchTicketsCountAction();
    const { response_type } = getTicketsCount;
    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(ticketscount).toBeDefined();
        expect(ticketscount).toHaveProperty(key);
      });
    } else {
      console.error('getTicketsCount response_type is undefined or null');
    }
  });

  it('should fetch a ticket', async () => {
    const fetchTicket = await getTicket.default.api_function;
    const showTicket = await fetchTicket({ ticket_id: newTicket.ticket.id });
    const { response_type } = getTicket;

    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(showTicket).toBeDefined();
        expect(showTicket.ticket).toBeDefined();
        expect(showTicket.ticket).toHaveProperty(key);
      });
    } else {
      console.error('getTicket response_type is undefined or null');
    }
  });

  it('should fetch a tickets', async () => {
    const fetchTicketsAction = await getTickets.default.api_function;
    const showTickets = await fetchTicketsAction({ ids: newTicket.ticket.id + '' });

    const { response_type } = getTickets;
    if (response_type) {
      const keys = Object.keys(response_type);
      keys.forEach((key) => {
        expect(showTickets).toHaveProperty(key);
      });
    } else {
      console.error('getTickets response_type is undefined or null');
    }
  });

  it('should update a ticket', async () => {
    const updateTicketAction = await updateTicket.default.api_function;
    const ticketUpdate = await updateTicketAction({
      ticket_id: newTicket.ticket.id,
      status: 'solved',
    });
    const { response_type } = updateTicket;

    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(ticketUpdate).toBeDefined();
        expect(ticketUpdate).toHaveProperty(key);
      });
    } else {
      console.error('ticketUpdate response_type is undefined or null');
    }
  });

  it('should delete a ticket', async () => {
    const deleteTicketAction = await deleteTicket.default.api_function;
    await deleteTicketAction({ ticket_id: newTicket.ticket.id });
  });
});

describe('groups', () => {
  let newGroup: any = null;
  it('should create a group', async () => {
    const createGroupAction = await createGroup.default.api_function;
    newGroup = await createGroupAction({ name: String(new Date().getTime()) });
    const { response_type } = createGroup;
    if (response_type) {
      const keys = Object.keys(response_type);

      keys.map((key) => {
        expect(newGroup).toBeDefined();
        expect(newGroup.group).toBeDefined();
        expect(newGroup.group).toHaveProperty(key);
      });
    } else {
      console.error('response_type is undefined or null');
    }
  });

  it('should fetch a group', async () => {
    const getGroupAction = await getGroup.default.api_function;
    const showGroup = await getGroupAction({ id: newGroup.group.id });
    const { response_type } = getGroup;

    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(showGroup).toBeDefined();
        expect(showGroup.group).toBeDefined();
        expect(showGroup.group).toHaveProperty(key);
      });
    } else {
      console.error('getGroup response_type is undefined or null');
    }
  });

  it('should fetch a groups', async () => {
    const getGroupsAction = await getGroups.default.api_function;
    const showGroups = await getGroupsAction();

    const { response_type } = getGroups;

    if (response_type) {
      const keys = Object.keys(response_type);
      keys.forEach((key) => {
        expect(showGroups).toHaveProperty(key);
      });
    } else {
      console.error('getGroups response_type is undefined or null');
    }
  });

  it('should update a groups', async () => {
    const updateGroupAction = await updateGroup.default.api_function;
    const groupUpdate = await updateGroupAction({
      id: newGroup.group.id,
      name: 'Interesting Group',
    });
    const { response_type } = updateGroup;

    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(groupUpdate).toBeDefined();
        expect(groupUpdate.group).toBeDefined();
        expect(groupUpdate.group).toHaveProperty(key);
      });
    } else {
      console.error('groupUpdate response_type is undefined or null');
    }
  });

  it('should delete a group', async () => {
    const deleteGroupAction = await deleteGroup.default.api_function;
    await deleteGroupAction({ id: newGroup.group.id });
  });
});

describe('attachments', () => {
  // let attachment_id: any = 2;
  // let attachment_token: any = ' ';
  // it('should create a attachment', async () => {
  //   const createAttachmentAction = await createAttachment.default.api_function;
  //   const newAttachment = await createAttachmentAction({
  //     attachment_id: 2,
  //     attachment_token: ' ',
  //     file_name: 'test.jpg',
  //     content_type: 'image/jpeg',
  //   });
  //   const { response_type } = createAttachment;
  //   if (response_type) {
  //     const keys = Object.keys(response_type);
  //     keys.map((key) => {
  //       expect(newAttachment).toBeDefined();
  //       expect(newAttachment.attachment).toBeDefined();
  //       expect(newAttachment.attachment).toHaveProperty(key);
  //     });
    
  //   } else {
  //     console.error('response_type is undefined or null');
  //   }
  // });
  // it('should fetch a attachment', async () => {
  //   const getAttachmentAction = await getAttachment.default.api_function;
  //   const showAttachment = await getAttachmentAction({ id: attachment_id });
  //   const { response_type } = getAttachment;
  //   if (response_type) {
  //     const keys = Object.keys(response_type);
  //     keys.map((key) => {
  //       expect(showAttachment).toBeDefined();
  //       expect(showAttachment.attachment).toBeDefined();
  //       expect(showAttachment.attachment).toHaveProperty(key);
  //     });
  //   } else {
  //     console.error('getAttachment response_type is undefined or null');
  //   }
  // });
  // it('should delete a attachment', async () => {
  //   const deleteAttachmentAction = await deleteAttachment.default.api_function;
  //   await deleteAttachmentAction({ token: attachment_token });
  // });
});

describe('organizations', () => {
  let newOrganization: any = null;
  const organizationName = `My Organization ${new Date().getTime()}`;
  it('should create a organization', async () => {
    const createOrganizationAction = await createOrganization.default.api_function;
    newOrganization = await createOrganizationAction({
      organization: {
        name: organizationName,
      },
    });
    const { response_type } = createOrganization;
    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(newOrganization).toBeDefined();
        expect(newOrganization.organization).toBeDefined();
        expect(newOrganization.organization).toHaveProperty(key);
      });
    } else {
      console.error('response_type is undefined or null');
    }
  });

  it('should fetch a organizations', async () => {
    const getOrganizationsAction = await getOrganizations.default.api_function;
    const showManyOrg = await getOrganizationsAction();

    const { response_type } = getOrganizations;
    if (response_type) {
      const keys = Object.keys(response_type);
      keys.forEach((key) => {
        expect(showManyOrg).toHaveProperty(key);
      });
    } else {
      console.error('getOrganizationss response_type is undefined or null');
    }
  });

  it('should fetch a organization', async () => {
    const fetchOrganizations = await getOrganization.default.api_function;
    const showOrganization = await fetchOrganizations({ id: newOrganization.organization.id });
    const { response_type } = getOrganization;

    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(showOrganization).toBeDefined();
        expect(showOrganization.organization).toBeDefined();
        expect(showOrganization.organization).toHaveProperty(key);
      });
    } else {
      console.error('getOrganization response_type is undefined or null');
    }
  });

  it('should update a organization', async () => {
    const updateOrganizationAction = await updateOrganization.default.api_function;
    const organizationUpdate = await updateOrganizationAction({
      id: newOrganization.organization.id,
      organization: { notes: 'Something interesting' },
    });

    const { response_type } = updateOrganization;

    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(organizationUpdate).toBeDefined();
        expect(organizationUpdate.organization).toBeDefined();
        expect(organizationUpdate.organization).toHaveProperty(key);
      });
    } else {
      console.error('organizationUpdate response_type is undefined or null');
    }
  });

  it('should delete a organization', async () => {
    const deleteOrganizationAction = await deleteOrganization.default.api_function;
    await deleteOrganizationAction({ id: newOrganization.organization.id });
  });
});

describe('users', () => {
  let newUser: any = null;

  it('should create a user', async () => {
    const createUserAction = await createUser.default.api_function;
    newUser = await createUserAction({
      user: {
        name: `My User${new Date().getTime()}`,
        email: `user${new Date().getTime()}@example.com`,
      },
    });
    const { response_type } = createUser;
    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(newUser).toBeDefined();
        expect(newUser.user).toBeDefined();
        expect(newUser.user).toHaveProperty(key);
      });
    } else {
      console.error('response_type is undefined or null');
    }
  });

  it('should fetch a users', async () => {
    const getUserAction = await getUsers.default.api_function;
    const showusers = await getUserAction();
    expect(showusers).toBeDefined();
    expect(showusers.users).toBeDefined();
    expect(Array.isArray(showusers.users)).toBe(true);
  });

  it('should fetch a user', async () => {
    const fetchUser = await getUser.default.api_function;
    const fetchedUser = await fetchUser({ id: newUser.user.id, name: newUser.user.name });

    const { response_type } = getUser;
    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(fetchedUser).toBeDefined();
        expect(fetchedUser.user).toBeDefined();
        expect(fetchedUser.user).toHaveProperty(key);
      });
    } else {
      console.error('getUser response_type is undefined or null');
    }
  });

  it('should update a user', async () => {
    const updateUserAction = await updateUser.default.api_function;
    const updatedUser = await updateUserAction({
      id: newUser.user.id,
      name: 'New Name',
    });
    const { response_type } = updateUser;
    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(updatedUser).toBeDefined();
        expect(updatedUser.user).toBeDefined();
        expect(updatedUser.user).toHaveProperty(key);
      });
    } else {
      console.error('updateUser response_type is undefined or null');
    }
  });

  it('should delete a user', async () => {
    const deleteUserAction = await deleteUser.default.api_function;
    const deletedUser = await deleteUserAction({ id: newUser.user.id });
    const { response_type } = deleteUser;
    if (response_type) {
      const keys = Object.keys(response_type);
      keys.map((key) => {
        expect(deletedUser).toBeDefined();
        expect(deletedUser.user).toBeDefined();
        expect(deletedUser.user).toHaveProperty(key);
      });
    } else {
      console.error('deleteUser response_type is undefined or null');
    }
  });
});