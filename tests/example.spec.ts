import { test, expect } from "@playwright/test";


test.describe("Dummy api example", async () => {
  const url = "https://dummy.restapiexample.com/api/v1/";

  test("Get all employee data", async ({ request }) => {
    const response = await request.get(url + "employees");

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(JSON.stringify(body));
  });


  test("Create new record in database", async ({ request }) => {
    const response = await request.post(url + "create", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: '{"name":"test","salary":"123","age":"23"}'
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(JSON.stringify(body));
  });

  test("Update an employee record", async ({ request }) => {
    const response = await request.put(url + "update/21", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: '{"name":"test","salary":"123","age":"23"}'
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(JSON.stringify(body));
  });

  test("Delete an employee record", async ({ request }) => {
    const response = await request.delete(url + "delete/2");

    expect(response.status()).toBe(200);
    const body = await response.json();
    console.log(JSON.stringify(body));
  });

});