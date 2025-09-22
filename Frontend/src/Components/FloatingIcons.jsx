const FloatingIcons = () => {
  const icons = [
    { emoji: "📏", top: "15%", left: "10%" },
    { emoji: "🧪", top: "35%", right: "15%" },
    { emoji: "📖", top: "50%", left: "8%" },
    { emoji: "✏️", top: "70%", left: "12%" },
    { emoji: "🔬", top: "30%", left: "12%" },
    { emoji: "📐", top: "50%", right: "8%" },
    { emoji: "🖊️", top: "20%", left: "85%" },
    { emoji: "📊", top: "70%", left: "88%" }
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="animate-float absolute text-4xl opacity-40 text-chalk-dust"
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            animationDelay: `${index * 0.5}s`
          }}
        >
          {icon.emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingIcons;