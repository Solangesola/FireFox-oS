/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


$(function() { $("#get-battery").click(function() {
    $("#battery-pct").text(Math.round(navigator.battery.level * 100) + "%"); }); });
var canInstall = !!(navigator.mozApps && navigator.mozApps. installPackage);

if (canInstall) { var manifestURL = location.href.substring(0, location.href.lastIndexOf("/")) + "/mypackage.webapp";
    var installApp = navigator.mozApps.installPackage(manifestURL); }
