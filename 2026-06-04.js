/*
Schema Validator Part 4

Given an object (JavaScript) or dictionary (Python), determine if it matches the following schema:

Roles = "user" | "creator" | "moderator" | "staff" | "admin"

{
  username: string,
  posts: number,
  verified: boolean,
  role: Roles,
  supporter?: boolean
}

 - The pipe (|) symbol means "or". role must be one of the listed Roles values.
 - The question mark (?) after supporter means that the field is optional, but is the specified type if it exists.
 - Extra keys are allowed

*/

function isValidSchema(obj) {
    const roles = ["user", "creator", "moderator", "staff", "admin"];

    return (
        typeof obj?.username === "string" &&
        typeof obj?.posts === "number" &&
        typeof obj?.verified === "boolean" &&
        (
            typeof obj?.role === "string" &&
            roles.includes(obj?.role)
        )
        &&
        (
            Object.hasOwn(obj, "supporter") ? typeof obj.supporter === "boolean" : true
        )
    );
}
