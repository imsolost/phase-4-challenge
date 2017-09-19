console.log('hello from the browser JavaScript')

const deletePopup = (event) => {
  if (confirm('Are you sure you want to delete this post?')) {
    fetch(`/delete/${event.target.id}`, {
      method: 'delete',
      credentials: 'include',
    })
      .then(() => {
        const currentNode = document.getElementById(`${event.target.id}`).parentNode
        alert('deleted the post')
        currentNode.parentNode.removeChild(currentNode)
      })
  }
}

document.querySelectorAll('.trashcan').forEach((button) => {
  button.addEventListener('click', deletePopup)
})
