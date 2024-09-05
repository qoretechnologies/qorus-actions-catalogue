import createTicket from '../zendesk/actions/tickets/create-ticket';
import { responseHasCorrectStructure } from './utils';

describe('tickets', () => {
  it('should create a ticket', async () => {
    const { api_function, response_type } = createTicket;

    const newTicket = await api_function({
      ticket: {
        comment: {
          body: 'The smoke is very colorful.',
        },
        priority: 'urgent',
        subject: 'My printer is on fire!',
      },
    });

    responseHasCorrectStructure(newTicket.ticket as Record<string, any>, response_type.ticket.type);
  });

  // it('should fetch a tickets count', async () => {
  //   const fetchTicketsCountAction = await getTicketsCount.api_function;
  //   const ticketscount = await fetchTicketsCountAction();
  //   const { response_type } = getTicketsCount;
  //   if (response_type) {
  //     const keys = Object.keys(response_type);
  //     keys.map((key) => {
  //       expect(ticketscount).toBeDefined();
  //       expect(ticketscount).toHaveProperty(key);
  //     });
  //   } else {
  //     console.error('getTicketsCount response_type is undefined or null');
  //   }
  // });

  // it('should fetch a ticket', async () => {
  //   const fetchTicket = await getTicket.api_function;
  //   const showTicket = await fetchTicket({ ticket_id: newTicket.ticket.id });
  //   const { response_type } = getTicket;

  //   if (response_type) {
  //     const keys = Object.keys(response_type);
  //     keys.map((key) => {
  //       expect(showTicket).toBeDefined();
  //       expect(showTicket.ticket).toBeDefined();
  //       expect(showTicket.ticket).toHaveProperty(key);
  //     });
  //   } else {
  //     console.error('getTicket response_type is undefined or null');
  //   }
  // });

  // it('should fetch a tickets', async () => {
  //   const fetchTicketsAction = await getTickets.api_function;
  //   const showTickets = await fetchTicketsAction({ ids: newTicket.ticket.id + '' });

  //   const { response_type } = getTickets;
  //   if (response_type) {
  //     const keys = Object.keys(response_type);
  //     keys.forEach((key) => {
  //       expect(showTickets).toHaveProperty(key);
  //     });
  //   } else {
  //     console.error('getTickets response_type is undefined or null');
  //   }
  // });

  // it('should update a ticket', async () => {
  //   const updateTicketAction = await updateTicket.api_function;
  //   const ticketUpdate = await updateTicketAction({
  //     ticket_id: newTicket.ticket.id,
  //     status: 'solved',
  //   });
  //   const { response_type } = updateTicket;

  //   if (response_type) {
  //     const keys = Object.keys(response_type);
  //     keys.map((key) => {
  //       expect(ticketUpdate).toBeDefined();
  //       expect(ticketUpdate).toHaveProperty(key);
  //     });
  //   } else {
  //     console.error('ticketUpdate response_type is undefined or null');
  //   }
  // });

  // it('should delete a ticket', async () => {
  //   const deleteTicketAction = await deleteTicket.api_function;
  //   await deleteTicketAction({ ticket_id: newTicket.ticket.id });
  // });
});

// describe('groups', () => {
//   let newGroup: any = null;
//   it('should create a group', async () => {
//     const createGroupAction = await createGroup.api_function;
//     newGroup = await createGroupAction({ name: String(new Date().getTime()) });
//     const { response_type } = createGroup;
//     if (response_type) {
//       const keys = Object.keys(response_type);

//       keys.map((key) => {
//         expect(newGroup).toBeDefined();
//         expect(newGroup.group).toBeDefined();
//         expect(newGroup.group).toHaveProperty(key);
//       });
//     } else {
//       console.error('response_type is undefined or null');
//     }
//   });

//   it('should fetch a group', async () => {
//     const getGroupAction = await getGroup.api_function;
//     const showGroup = await getGroupAction({ id: newGroup.group.id });
//     const { response_type } = getGroup;

//     if (response_type) {
//       const keys = Object.keys(response_type);
//       keys.map((key) => {
//         expect(showGroup).toBeDefined();
//         expect(showGroup.group).toBeDefined();
//         expect(showGroup.group).toHaveProperty(key);
//       });
//     } else {
//       console.error('getGroup response_type is undefined or null');
//     }
//   });

//   it('should fetch a groups', async () => {
//     const getGroupsAction = await getGroups.api_function;
//     const showGroups = await getGroupsAction();

//     const { response_type } = getGroups;

//     if (response_type) {
//       const keys = Object.keys(response_type);
//       keys.forEach((key) => {
//         expect(showGroups).toHaveProperty(key);
//       });
//     } else {
//       console.error('getGroups response_type is undefined or null');
//     }
//   });

//   it('should update a groups', async () => {
//     const updateGroupAction = await updateGroup.api_function;
//     const groupUpdate = await updateGroupAction({
//       id: newGroup.group.id,
//       name: 'Interesting Group',
//     });
//     const { response_type } = updateGroup;

//     if (response_type) {
//       const keys = Object.keys(response_type);
//       keys.map((key) => {
//         expect(groupUpdate).toBeDefined();
//         expect(groupUpdate.group).toBeDefined();
//         expect(groupUpdate.group).toHaveProperty(key);
//       });
//     } else {
//       console.error('groupUpdate response_type is undefined or null');
//     }
//   });

//   it('should delete a group', async () => {
//     const deleteGroupAction = await deleteGroup.api_function;
//     await deleteGroupAction({ id: newGroup.group.id });
//   });
// });

// describe('attachments', () => {
//   // let attachment_id: any = 2;
//   // let attachment_token: any = ' ';
//   // it('should create a attachment', async () => {
//   //   const createAttachmentAction = await createAttachment.api_function;
//   //   const newAttachment = await createAttachmentAction({
//   //     attachment_id: 2,
//   //     attachment_token: ' ',
//   //     file_name: 'test.jpg',
//   //     content_type: 'image/jpeg',
//   //   });
//   //   const { response_type } = createAttachment;
//   //   if (response_type) {
//   //     const keys = Object.keys(response_type);
//   //     keys.map((key) => {
//   //       expect(newAttachment).toBeDefined();
//   //       expect(newAttachment.attachment).toBeDefined();
//   //       expect(newAttachment.attachment).toHaveProperty(key);
//   //     });
//   //   } else {
//   //     console.error('response_type is undefined or null');
//   //   }
//   // });
//   // it('should fetch a attachment', async () => {
//   //   const getAttachmentAction = await getAttachment.api_function;
//   //   const showAttachment = await getAttachmentAction({ id: attachment_id });
//   //   const { response_type } = getAttachment;
//   //   if (response_type) {
//   //     const keys = Object.keys(response_type);
//   //     keys.map((key) => {
//   //       expect(showAttachment).toBeDefined();
//   //       expect(showAttachment.attachment).toBeDefined();
//   //       expect(showAttachment.attachment).toHaveProperty(key);
//   //     });
//   //   } else {
//   //     console.error('getAttachment response_type is undefined or null');
//   //   }
//   // });
//   // it('should delete a attachment', async () => {
//   //   const deleteAttachmentAction = await deleteAttachment.api_function;
//   //   await deleteAttachmentAction({ token: attachment_token });
//   // });
// });

// describe('organizations', () => {
//   let newOrganization: any = null;
//   const organizationName = `My Organization ${new Date().getTime()}`;
//   it('should create a organization', async () => {
//     const createOrganizationAction = await createOrganization.api_function;
//     newOrganization = await createOrganizationAction({
//       organization: {
//         name: organizationName,
//       },
//     });
//     const { response_type } = createOrganization;
//     if (response_type) {
//       const keys = Object.keys(response_type);
//       keys.map((key) => {
//         expect(newOrganization).toBeDefined();
//         expect(newOrganization.organization).toBeDefined();
//         expect(newOrganization.organization).toHaveProperty(key);
//       });
//     } else {
//       console.error('response_type is undefined or null');
//     }
//   });

//   it('should fetch a organizations', async () => {
//     const getOrganizationsAction = await getOrganizations.api_function;
//     const showManyOrg = await getOrganizationsAction();

//     const { response_type } = getOrganizations;
//     if (response_type) {
//       const keys = Object.keys(response_type);
//       keys.forEach((key) => {
//         expect(showManyOrg).toHaveProperty(key);
//       });
//     } else {
//       console.error('getOrganizationss response_type is undefined or null');
//     }
//   });

//   it('should fetch a organization', async () => {
//     const fetchOrganizations = await getOrganization.api_function;
//     const showOrganization = await fetchOrganizations({ id: newOrganization.organization.id });
//     const { response_type } = getOrganization;

//     if (response_type) {
//       const keys = Object.keys(response_type);
//       keys.map((key) => {
//         expect(showOrganization).toBeDefined();
//         expect(showOrganization.organization).toBeDefined();
//         expect(showOrganization.organization).toHaveProperty(key);
//       });
//     } else {
//       console.error('getOrganization response_type is undefined or null');
//     }
//   });

//   it('should update a organization', async () => {
//     const updateOrganizationAction = await updateOrganization.api_function;
//     const organizationUpdate = await updateOrganizationAction({
//       id: newOrganization.organization.id,
//       organization: { notes: 'Something interesting' },
//     });

//     const { response_type } = updateOrganization;

//     if (response_type) {
//       const keys = Object.keys(response_type);
//       keys.map((key) => {
//         expect(organizationUpdate).toBeDefined();
//         expect(organizationUpdate.organization).toBeDefined();
//         expect(organizationUpdate.organization).toHaveProperty(key);
//       });
//     } else {
//       console.error('organizationUpdate response_type is undefined or null');
//     }
//   });

//   it('should delete a organization', async () => {
//     const deleteOrganizationAction = await deleteOrganization.api_function;
//     await deleteOrganizationAction({ id: newOrganization.organization.id });
//   });
// });

// describe('users', () => {
//   let newUser: any = null;

//   it('should create a user', async () => {
//     const createUserAction = await createUser.api_function;
//     newUser = await createUserAction({
//       user: {
//         name: `My User${new Date().getTime()}`,
//         email: `user${new Date().getTime()}@example.com`,
//       },
//     });
//     const { response_type } = createUser;
//     if (response_type) {
//       const keys = Object.keys(response_type);
//       keys.map((key) => {
//         expect(newUser).toBeDefined();
//         expect(newUser.user).toBeDefined();
//         expect(newUser.user).toHaveProperty(key);
//       });
//     } else {
//       console.error('response_type is undefined or null');
//     }
//   });

//   it('should fetch a users', async () => {
//     const getUserAction = await getUsers.api_function;
//     const showusers = await getUserAction();
//     expect(showusers).toBeDefined();
//     expect(showusers.users).toBeDefined();
//     expect(Array.isArray(showusers.users)).toBe(true);
//   });

//   it('should fetch a user', async () => {
//     const fetchUser = await getUser.api_function;
//     const fetchedUser = await fetchUser({ id: newUser.user.id, name: newUser.user.name });

//     const { response_type } = getUser;
//     if (response_type) {
//       const keys = Object.keys(response_type);
//       keys.map((key) => {
//         expect(fetchedUser).toBeDefined();
//         expect(fetchedUser.user).toBeDefined();
//         expect(fetchedUser.user).toHaveProperty(key);
//       });
//     } else {
//       console.error('getUser response_type is undefined or null');
//     }
//   });

//   it('should update a user', async () => {
//     const updateUserAction = await updateUser.api_function;
//     const updatedUser = await updateUserAction({
//       id: newUser.user.id,
//       name: 'New Name',
//     });
//     const { response_type } = updateUser;
//     if (response_type) {
//       const keys = Object.keys(response_type);
//       keys.map((key) => {
//         expect(updatedUser).toBeDefined();
//         expect(updatedUser.user).toBeDefined();
//         expect(updatedUser.user).toHaveProperty(key);
//       });
//     } else {
//       console.error('updateUser response_type is undefined or null');
//     }
//   });

//   it('should delete a user', async () => {
//     const deleteUserAction = await deleteUser.api_function;
//     const deletedUser = await deleteUserAction({ id: newUser.user.id });
//     const { response_type } = deleteUser;
//     if (response_type) {
//       const keys = Object.keys(response_type);
//       keys.map((key) => {
//         expect(deletedUser).toBeDefined();
//         expect(deletedUser.user).toBeDefined();
//         expect(deletedUser.user).toHaveProperty(key);
//       });
//     } else {
//       console.error('deleteUser response_type is undefined or null');
//     }
//   });
// });
