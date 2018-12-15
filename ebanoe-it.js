var key=document.location.href.replace(/^.*\/([^/]+)(\/#?.*)$/,'__sc-$1');
var sc=localStorage.getItem(key)||'';
sc.split(',').forEach(el=>jQuery('#comment-'+el).addClass('seen'));
jQuery('.comment:not(.seen)>.comment-body').css({borderLeft: "5px solid #800"});
sc=[];
jQuery('.comment').each((i, el) => sc.push(el.id.substring(8)));
localStorage.setItem(key, sc.join(','));
console.log(jQuery('.comment:not(.seen)').length+' new comments');
