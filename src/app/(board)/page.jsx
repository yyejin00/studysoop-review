import React from 'react';
import { styles } from '.page.css.js';
import { RecentStudy } from './components/RecentStudy/RecentStudy.jsx';
import { AllStudy } from './components/AllStudy/AllStudy.jsx';
import { PasswordModal } from '@/components/PasswordModal/PasswordModal.jsx';
export default function borard() {
  return (
    <main className={styles.homeLayout}>
      <RecentStudy
        allStudies={studies}
        onCardClick={handleStudyClick}
        key={recentTrigger}
      />
      <AllStudy
        studies={studies}
        isLoading={isLoading}
        morePage={morePage}
        keyword={keyword}
        setKeyword={setKeyword}
        onPageChange={setPage}
        selected={selected}
        onOptionClick={(opt) => {
          setSelected(opt);
          setPage(1);
          setMorePage(true);
        }}
        onCardClick={handleStudyClick}
      />
      <PasswordModal
        isOpen={isVerifyOpen}
        onClose={() => setIsVerifyOpen(false)}
        title="스터디 입장"
        onConfirm={handleVerifyConfirm}
      />
    </main>
  );
}
