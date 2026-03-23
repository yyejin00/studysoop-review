export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.inner}>
        <Link href="/">
          <img src={logo} alt="TodayHabit" className={styles.logo} />
        </Link>
        {showButton && (
          <Button onClick={() => navigate('/create')}>스터디 만들기</Button>
        )}
      </div>
    </header>
  );
}
