const navBarHtml = `
<html>

<head>
    <link rel="stylesheet" href="styles.css">
</head>
<div class="topnav">
    <a class="active" href="index.html">Home</a>
    <a href="introduction.html">Introduction</a>
    <a href="background.html">Industry Background</a>
    <a href="threattrends.html">Threat Trends</a>
    <a href="assets.html">Critical Assets</a>
    <a href="diamondmodels.html">Diamond Models</a>
    <a href="insights.html">Key Insights</a>
    <a href="operationalintel.html">Operational Intel</a>
    <a href="platform.html">Platform Direction</a>
</div>

</html> 
`

window.onload = async () => {
    const navBar = document.createElement('div');
    navBar.innerHTML = navBarHtml;
    document.body.insertBefore(navBar, document.body.firstChild);
}