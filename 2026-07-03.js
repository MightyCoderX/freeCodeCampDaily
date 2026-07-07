// https://www.freecodecamp.org/learn/daily-coding-challenge/2026-07-03

/*
Given two database objects, return the second object with any missing properties from the first filled in.
- Fields that already exist in the record should not be overwritten.
*/

function migrateRecord(schema, record) {

    return Object.assign(schema, record);
}
