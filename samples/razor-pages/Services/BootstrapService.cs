using System.Collections.Generic;

namespace bootstrap_dark.Services
{
    public interface IBootstrapService
    {
        IEnumerable<string> Suffixes { get; }
    }

    public class BootstrapService : IBootstrapService
    {
        public IEnumerable<string> Suffixes => new[]{
            "primary",
            "secondary",
            "success",
            "info",
            "warning",
            "danger",
            "light",
            "dark",
        };
    }
}