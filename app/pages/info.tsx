import StatsCount from "@/components/ui/statscount";

const Info = () => {
    const stats = [
      { value: 5, suffix: "+", label: "Years of Experience in Development" },
      { value: 12, suffix: "K+", label: "Develop a Responsive Web" },
      { value: 99, suffix: "%", label: "Performance optimized for web" },
    ];
    return (
      <StatsCount
        title="CREAATE A STUNNING WEB SITE AND IMPLEMENT THE SECURITY"
        stats={stats}
        showDividers={true}
      />
    );
}

export default Info;