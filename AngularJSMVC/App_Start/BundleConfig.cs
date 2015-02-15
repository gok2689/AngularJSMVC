using System.Web;
using System.Web.Optimization;

namespace AngularJSMVC
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/AngularJSMVC")
            .IncludeDirectory("~/Scripts/Controllers", "*.js")
            .IncludeDirectory("~/Scripts/Factories","*.js")
            .Include("~/Scripts/AngularJSMVC.js"));
            
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/site.css"));
            BundleTable.EnableOptimizations = true;
        }
    }
}
