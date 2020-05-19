const observer = new MutationObserver(function (mutations, observer) {
  if(mutations.some(({addedNodes}) => addedNodes.length > 0)) return

  document.querySelectorAll('.episodeSynopsis').forEach((synopsis) => {
    synopsis.innerText = 'This episode synopsis has been removed by the unspoil chrome extension to avoid spoilers'
  })
})

observer.observe(document.getElementById('appMountPoint'), {childList: true, subtree: true});
