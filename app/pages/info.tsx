import StatsCount from "@/components/ui/statscount";

const Info = () => {
    const stats = [
      { value: 5, suffix: "+", label: "Years of Experience in Development" },
      { value: 12, suffix: "K+", label: "Develop a Responsive Web" },
      { value: 10, suffix: "+", label: "Client serve" },
      { value: 50, suffix: "+", label: "Design create as graphic designer" },
      { value: 99, suffix: "%", label: "Performance optimized for web" },
    ];
    return (
      <StatsCount
        title="CREATE A STUNNING WEB SITE AND IMPLEMENT THE SECURITY"
        stats={stats}
        showDividers={true}
      />
    );
}

export default Info;