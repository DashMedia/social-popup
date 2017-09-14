# Social Popup Plugin

Hijacks clicks and opens them in a small popup window. 

Currently requires links to already exist in DOM with a common class on the `a`

## Markup example

```html
<ul class="social-share-cta">
  <li><a class="social-share-cta__link" href="http://www.facebook.com/sharer.php?u=http://somelink.com"><span class="social-share-cta__icon icon-facebook social-share-cta__icon--facebook"></span>Share</a></li>
  <li><a class="social-share-cta__link" href="https://twitter.com/intent/tweet?url=http://somelink.com"><span class="social-share-cta__icon social-share-cta__icon--twitter icon-twitter"></span>Tweet</a></li>
  <li><a class="social-share-cta__link" href="https://www.linkedin.com/shareArticle?url=http://somelink.com&mini=true&title=Page%20title&source=http://somelink.com"><span class="social-share-cta__icon icon-linkedin social-share-cta__icon--linkedin"></span>Share</a></li>
</ul>
```

## MODX Example

```html
<ul class="social-share-cta">
  <li><a class="social-share-cta__link" href="http://www.facebook.com/sharer.php?u=[[*id:urlClean:urlencode]]"><span class="social-share-cta__icon icon-facebook social-share-cta__icon--facebook"></span>Share</a></li>
  <li><a class="social-share-cta__link" href="https://twitter.com/intent/tweet?[[+tvSocialCTATwitterName:!empty=`text=%40[[+tvSocialCTATwitterName]]&amp;`]]url=[[*id:urlClean:urlencode]]"><span class="social-share-cta__icon social-share-cta__icon--twitter icon-twitter"></span>Tweet</a></li>
  <li><a class="social-share-cta__link" href="https://www.linkedin.com/shareArticle?url=[[*id:urlClean:urlencode]]&mini=true&title=[[*pagetitle:urlencode]]&source=[[++site_start:urlClean:urlencode]]"><span class="social-share-cta__icon icon-linkedin social-share-cta__icon--linkedin"></span>Share</a></li>
</ul>
```