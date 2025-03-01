export async function createTextRecord(web5) {
// Create a plain text record
const { record } = await web5.dwn.records.create({
    data: "Hello Web5",
    message: {
        dataFormat: 'text/plain'
    }
});

return record;
}

export async function createJsonRecord(web5) {
// Create a JSON record
const { record } = await web5.dwn.records.create({
    data: {
        content: "Hello Web5",
        description: "Keep Building!"
    },
    message: {
        dataFormat: 'application/json'
    }
});

return record;
}