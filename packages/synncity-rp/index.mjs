import AWS from 'aws-sdk';

// Configure AWS SDK
AWS.config.update({
    region: 'us-east-2', // Replace with your region
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function testDynamoDB() {
    const tableName = 'scrp_test';

    // Test item
    const testItem = {
        id: 'test-key',
        message: 'Hello, DynamoDB!',
    };

    try {
        // Step 1: Insert an item
        console.log(`Inserting item into table "${tableName}"...`);
        await dynamodb
            .put({
                TableName: tableName,
                Item: testItem,
            })
            .promise();
        console.log('Item inserted successfully.');

        // Step 2: Retrieve the item
        console.log(`Retrieving item from table "${tableName}"...`);
        const result = await dynamodb
            .get({
                TableName: tableName,
                Key: { id: testItem.id },
            })
            .promise();
        console.log('Retrieved item:', result.Item);

        // Step 3: Delete the item
        console.log(`Deleting item from table "${tableName}"...`);
        await dynamodb
            .delete({
                TableName: tableName,
                Key: { id: testItem.id },
            })
            .promise();
        console.log('Item deleted successfully.');
    } catch (error) {
        console.error('Error during DynamoDB test:', error);
    }
}

testDynamoDB();
