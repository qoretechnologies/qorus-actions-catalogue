export class PaginationGuildMembersInterface {
  limit?: number; //Max number of members to return (1-1000)
  after?: string; //The highest user id in the previous page
}
