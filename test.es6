import assert from 'assert';
import elem from 'fd-elem';
import domify from 'domify';
import append from 'fd-append';
import insertBefore from './';
import {selectOne} from 'fd-select';

let testDom = `<div id="parentElement">
  <span id="childElement">foo bar</span>
</div>`
append(document.body, domify(testDom));

let sp1 = elem("span","meow")
,sp2 = document.getElementById("childElement")
,parentDiv = sp2.parentNode


it('fd-insert-before', () => {
  insertBefore(parentDiv, sp1, sp2);
  assert.equal(selectOne('#parentElement').children[0].innerText, 'meow');
});
