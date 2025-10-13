export async function getBlogs() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [
    {
      imageLink:
        'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160',
      title: 'Boiler Title',
      description: 'Boiler Description',
    },
    {
      imageLink:
        'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160',
      title: 'Boiler Title',
      description:
        'Lorem ipsum Boiler plate description here and there Lorem ipsum Boiler plate description here and there Lorem ipsum Boiler plate description here and there Lorem ipsum Boiler plate description here and there ',
    },

    {
      imageLink:
        'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160',
      title: 'Boiler Title',
      description: 'Boiler Description',
    },
  ];
}
