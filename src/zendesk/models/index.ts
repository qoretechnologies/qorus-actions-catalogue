export interface ITicketInterface {
    url: string,
    id: number,
    external_id: null | number,
    via: Record<string, any>[],
    created_at: string,
    updated_at: string,
    generated_timestamp: number,
    type: null | string,
    subject: string,
    raw_subject: string,
    description: string,
    priority: null | string | boolean,
    status: string,
    recipient: null | string,
    requester_id: number,
    submitter_id: number,
    assignee_id: number,
    organization_id: number,
    group_id: number,
    collaborator_ids: number[],
    follower_ids: number[],
    email_cc_ids: number[],
    forum_topic_id: null | number,
    problem_id: null | number,
    has_incidents: boolean,
    is_public: boolean,
    due_at: null | string,
    tags: string[],
    custom_fields: any[][],
    satisfaction_rating: null | string,
    sharing_agreement_ids: string[],
    custom_status_id: number,
    fields: any[][],
    followup_ids: number[],
    ticket_form_id: number,
    brand_id: number,
    allow_channelback: boolean,
    allow_attachments: boolean,
    from_messaging_channel: boolean,
}

export interface IAuditInterface {
    id: number,
    ticket_id: number,
    created_at: string,
    author_id: number,
    metadata: Record<string, any>[],
    events: any[][],
    via: Record<string, any>[],
}


export interface ICreateTicketInterface {
    data: {
        ticket: ITicketInterface,
        audit: IAuditInterface
    }
}

export interface ITicketsInterface {
    data: {
        tickets: ITicketInterface[],
        next_page: null | number,
        previous_page: null | number,
        count: number
    }
}
