// http://localhost:3000/api/posts

export async function GET(request) {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Bob" },
  ];

  return new Response(JSON.stringify(users));
}

/**
 * export async function HEAD(request) { }
 * export async function POST(request) { }
 * export async function PUT(request) { }
 * export async function DELETE(request) { }
 * export async function PATCH(request) { }
 */
