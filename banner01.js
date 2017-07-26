<script language="JavaScript">
var ultimo=-1, dBanner;
function carrega(x) {dBanner=x;Banners()}
function Banners()
{
var MNews = new Array();
MNews[0]= '<A HREF="http://manjabooki.blogspot.com.br/2017/07/review-nanatsu-no-taizai-sem-spoilers.html" target="_blank"><IMG SRC="https://2.bp.blogspot.com/-HQo_bi7Trq0/WXjEwisEXuI/AAAAAAAABD4/dO_mA-YYDuw0bgTENRdRL67MgWOxq5L5gCLcBGAs/s640/Nanatsu_no_Taizai_Anime_Promo.png" WIDTH="120" HEIGHT="60" BORDER="0" ALT=""></a>';

MNews[1]= '<A HREF="http://manjabooki.blogspot.com.br/2017/07/poemas-e-poesias-no-alto.html" target="_blank"><IMG SRC="https://4.bp.blogspot.com/-xFFFCZhcgao/WXeSctzCKBI/AAAAAAAABDI/JRvPLimBKrQWT99gx3bcAxRCoEjVPj-_ACLcBGAs/s640/25deJulho.jpg" WIDTH="120" HEIGHT="60" BORDER="0" ALT=""></a>'

MNews[2]= '<A HREF="http://manjabooki.blogspot.com.br/2017/07/artigo-live-actions-o-que-voce-acha.html" target="_blank"><IMG SRC="https://3.bp.blogspot.com/-Pf8QZnI6XPc/WXIswNZP97I/AAAAAAAABCM/pHYBqIwT3TMO85RDG--Rf4FtgcL3mW3ewCLcBGAs/s640/LiveActions_CAPA_PT.jpg" WIDTH="120" HEIGHT="60" BORDER="0" ALT=""></a>'

while((Numero = parseInt(Math.random()*MNews.length))==ultimo);
dBanner.innerHTML=MNews[Numero];

setTimeout("Banners()",10000);
}
</script>

/* <html>
<head>
<title>Banner rotativo</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script language="JavaScript">
var ultimo=-1, dBanner;
function carrega(x) {dBanner=x;Banners()}
function Banners()
{
var MNews = new Array();
MNews[0]= '<A HREF="http://manjabooki.blogspot.com.br/2017/07/review-nanatsu-no-taizai-sem-spoilers.html" target="_blank"><IMG SRC="https://2.bp.blogspot.com/-HQo_bi7Trq0/WXjEwisEXuI/AAAAAAAABD4/dO_mA-YYDuw0bgTENRdRL67MgWOxq5L5gCLcBGAs/s640/Nanatsu_no_Taizai_Anime_Promo.png" WIDTH="120" HEIGHT="60" BORDER="0" ALT=""></a>';

MNews[1]= '<A HREF="http://manjabooki.blogspot.com.br/2017/07/poemas-e-poesias-no-alto.html" target="_blank"><IMG SRC="https://4.bp.blogspot.com/-xFFFCZhcgao/WXeSctzCKBI/AAAAAAAABDI/JRvPLimBKrQWT99gx3bcAxRCoEjVPj-_ACLcBGAs/s640/25deJulho.jpg" WIDTH="120" HEIGHT="60" BORDER="0" ALT=""></a>'

MNews[2]= '<A HREF="http://manjabooki.blogspot.com.br/2017/07/artigo-live-actions-o-que-voce-acha.html" target="_blank"><IMG SRC="https://3.bp.blogspot.com/-Pf8QZnI6XPc/WXIswNZP97I/AAAAAAAABCM/pHYBqIwT3TMO85RDG--Rf4FtgcL3mW3ewCLcBGAs/s640/LiveActions_CAPA_PT.jpg" WIDTH="120" HEIGHT="60" BORDER="0" ALT=""></a>'

while((Numero = parseInt(Math.random()*MNews.length))==ultimo);
dBanner.innerHTML=MNews[Numero];

setTimeout("Banners()",10000);
}
</script></head>
<body bgcolor="#FFFFFF" topmargin=0 leftmargin=0 text="#000000" onLoad=carrega(this.divBanner)>
<table width="120" border="0" cellspacing="0" cellpadding="0" height="60" bordercolor="#000000">
<tr>
<td>
<div align="center" id=divBanner></div>
</td>
</tr>
</table>
</body>
</html>*/
