const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();
textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if(e.key === 'Enter'){
    setTimeout(() =>{
      e.target.value = '';
    },10)
    randomSelect()
  }
})

const createTags = (input) => {
  //filtering out whitespace
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
  //clear the tags UI element
  tagsEl.innerHTML = '';
  //add tag element to the tagsEl
  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

const randomSelect = () => {
  //const for times we want to highlight and unhighlight tags
  const times = 30;

  const interval = setInterval(() => {
    ///this takes care of the highlighting and unhighlighting tags
    const randomTag = pickRandomTag();
    highLightTag(randomTag);
    setTimeout(() => {
      unHighLightTag(randomTag)
    }, 100);

  }, 100);
  ///this takes cares of stopping the highlight to random tag
  setTimeout(() => {
    //clear the setInterval above
    clearInterval(interval)
    //pick a random tag to stop on after clearing the interval
    setTimeout(() => {
      const randomTag = pickRandomTag()
      highLightTag(randomTag);
    }, 100);
  }, times * 100);
}//function to pick random tag
const pickRandomTag = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)]
}
///function to highlight a tag
const highLightTag = (tag) => {
  tag.classList.add('highlight');
}
///function to highlight a tag
const unHighLightTag = (tag) =>{
  tag.classList.remove('highlight');
}