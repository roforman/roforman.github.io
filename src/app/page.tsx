'use client'

import Image from 'next/image'
import { useI18n } from '@/i18n/I18nContext'
import styles from '@/styles/home.module.css'
import companyStyles from '@/styles/company.module.css'


export default function HomePage() {
  const { t } = useI18n()

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{t('home.heroTitle')}</h1>
          <p dangerouslySetInnerHTML={{ __html: t('home.heroBody') }} />
        </div>
      </section>

      {/* PDF 2페이지: 회사 소개 */}
      <section className={styles.about}>
        <div className={styles.aboutInner}>
          <div className={styles.aboutText}>
            <p className={styles.aboutMain}>{t('home.aboutMain')}</p>
            <p className={styles.aboutDesc}>{t('home.aboutDesc')}</p>
          </div>
          <div className={styles.aboutAddress}>
            <p><strong>ROFORMAN Inc.</strong></p>
            <p>{t('home.aboutHeadOffice')}</p>
            <p>{t('home.aboutRdCenter')}</p>
            <p>{t('home.aboutEmail')}</p>
          </div>
        </div>
      </section>

      {/* PDF 3페이지: R&D 목록 */}
      <section className={styles.rd}>
        <div className={styles.rdInner}>
          <h2 className={styles.rdTitle}>{t('home.rdTitle')}</h2>
        </div>
      </section>

      {/* Medication Compounding 기술 카드 */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.compoundingTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>{t('company.compoundingItem1')}</li>
          <li>{t('company.compoundingItem2')}</li>
          <li>{t('company.compoundingItem3')}</li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/compounding-structure.jpg" alt="Compounding system structure" fill style={{ objectFit: 'contain' }} />
            </div>
            <figcaption>{t('company.compoundingImgCaption1')}</figcaption>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/compounding-prototype.jpg" alt="Compounding prototype" fill style={{ objectFit: 'contain' }} />
            </div>
            <figcaption>{t('company.compoundingImgCaption2')}</figcaption>
          </figure>
        </div>
      </section>

      {/* Upper Limb Power-Assist */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.upperLimbTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>{t('company.upperLimbItem1')}</li>
          <li>{t('company.upperLimbItem2')}</li>
          <li>{t('company.upperLimbItem3')}</li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/upperlimb-mechanism.jpg" alt="Upper limb mechanism" fill style={{ objectFit: 'contain' }} />
            </div>
            <figcaption>{t('company.upperLimbImgCaption1')}</figcaption>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/upperlimb-robot.jpg" alt="Upper limb robot" fill style={{ objectFit: 'contain' }} />
            </div>
            <figcaption>{t('company.upperLimbImgCaption2')}</figcaption>
          </figure>
        </div>
      </section>

      {/* Power-assisted wheelchair */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.wheelchairTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>{t('company.wheelchairItem1')}</li>
          <li>{t('company.wheelchairItem2')}</li>
          <li>{t('company.wheelchairItem3')}</li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/BAmeOK2YKj0" title="Power-assisted wheelchair demo 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/X2zfbu-iNfA" title="Power-assisted wheelchair demo 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
        </div>
      </section>

      {/* Stair-climbing wheelchair */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.stairTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>{t('company.stairItem1')}</li>
          <li>{t('company.stairItem2')}</li>
          <li>{t('company.stairItem3')}</li>
          <li>{t('company.stairItem4')}</li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/MaNctP--nbo" title="Stair-climbing wheelchair demo 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/pgiCMoR1xyY" title="Stair-climbing wheelchair demo 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/_jy-N5AlqDw" title="Stair-climbing wheelchair demo 3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
        </div>
      </section>

      {/* 4-axis moving platform */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.fourAxisTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>{t('company.fourAxisItem1')}</li>
          <li>{t('company.fourAxisItem2')}</li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/4axis-platform.png" alt="4-axis moving platform" fill style={{ objectFit: 'contain' }} />
            </div>
            <figcaption>{t('company.fourAxisImgCaption')}</figcaption>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/szzicbhpoCQ" title="4-axis platform demo 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/IQVq_zCz9pU" title="4-axis platform demo 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
        </div>
      </section>

      {/* Automatic immobilization board */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.immobilizationTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>{t('company.immobilizationItem1')}</li>
          <li>{t('company.immobilizationItem2')}</li>
          <li>{t('company.immobilizationItem3')}</li>
          <li>{t('company.immobilizationItem4')}</li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/immobilization-board-1.jpg" alt="Immobilization board 1" fill style={{ objectFit: 'contain' }} />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/immobilization-board-2.png" alt="Immobilization board 2" fill style={{ objectFit: 'contain' }} />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/wP8wQIZkYB8" title="Immobilization board demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
        </div>
      </section>

      {/* Automatic abdominal breathing machines */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.abdominalTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>{t('company.abdominalItem1')}</li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/abdominal-breathing-1.jpg" alt="Abdominal breathing machine 1" fill style={{ objectFit: 'contain' }} />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/abdominal-breathing-2.jpg" alt="Abdominal breathing machine 2" fill style={{ objectFit: 'contain' }} />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/pn6cQzaZ1TI" title="Abdominal breathing machine demo" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
        </div>
      </section>

      {/* C-arm 기술 카드 */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.carmTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>
            {t('company.carmProblemTitle')}
            <ul>
              <li>{t('company.carmProblem1')}</li>
              <li>{t('company.carmProblem2')}</li>
            </ul>
          </li>
          <li>
            {t('company.carmSolutionTitle')}
            <ul>
              <li>{t('company.carmSolution1')}</li>
              <li>{t('company.carmSolution2')}</li>
            </ul>
          </li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/carm-1.png" alt="C-arm overview" fill style={{ objectFit: 'contain' }} />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/carm-2.jpg" alt="C-arm platform" fill style={{ objectFit: 'contain' }} />
            </div>
            <figcaption>{t('company.carmImgCaption')}</figcaption>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/carm-3.png" alt="C-arm diagram" fill style={{ objectFit: 'contain' }} />
            </div>
          </figure>
        </div>
      </section>

      {/* Exoskeletal 기술 카드 */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.exoTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>
            {t('company.exoDeviceTitle')}
            <ul>
              <li>{t('company.exoDevice1')}</li>
              <li>{t('company.exoDevice2')}</li>
              <li>{t('company.exoDevice3')}</li>
            </ul>
          </li>
          <li>
            {t('company.exoSystemTitle')}
            <ul>
              <li>{t('company.exoSystem1')}</li>
              <li>{t('company.exoSystem2')}</li>
              <li>{t('company.exoSystem3')}</li>
            </ul>
          </li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/exoskeletal-1.png" alt="Exoskeletal experimental setup" fill style={{ objectFit: 'contain' }} />
            </div>
            <figcaption>{t('company.exoImgCaption')}</figcaption>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/ueK4BHaNQpk"
                title="Master device"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <figcaption>{t('company.exoVideo1Caption')}</figcaption>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/6sHSHove0Pg"
                title="Teleoperation demonstration"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <figcaption>{t('company.exoVideo2Caption')}</figcaption>
          </figure>
        </div>
      </section>
      {/* Human interactive humanoid arm & hand */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.humanoidTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>{t('company.humanoidItem1')}</li>
          <li>{t('company.humanoidItem2')}</li>
          <li>{t('company.humanoidItem3')}</li>
          <li>{t('company.humanoidItem4')}</li>
          <li>{t('company.humanoidItem5')}</li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/6OgnhO3vWe0" title="Humanoid arm demo 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/y1aYLcUu8F0" title="Humanoid arm demo 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/nNi4egJkOYA" title="Humanoid arm demo 3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/CanpZVOt9RE" title="Humanoid arm demo 4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
        </div>
      </section>

      {/* 3-DOF anthropomorphic oculomotor simulator */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.oculomotorTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>{t('company.oculomotorItem1')}</li>
          <li>{t('company.oculomotorItem2')}</li>
          <li>{t('company.oculomotorItem3')}</li>
          <li>{t('company.oculomotorItem4')}</li>
          <li>{t('company.oculomotorItem5')}</li>
          <li>{t('company.oculomotorItem6')}</li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/dNOdDt1hWfE" title="Oculomotor simulator demo 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/37AbY4JxyGA" title="Oculomotor simulator demo 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/lqJxRRdFAYs" title="Oculomotor simulator demo 3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/UXXl_7sYrHc" title="Oculomotor simulator demo 4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
        </div>
      </section>

      {/* Kendo training robot */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.kendoTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>{t('company.kendoItem1')}</li>
          <li>{t('company.kendoItem2')}</li>
          <li>{t('company.kendoItem3')}</li>
          <li>{t('company.kendoItem4')}</li>
          <li>{t('company.kendoItem5')}</li>
          <li>{t('company.kendoItem6')}</li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/JKZHQDbj2I4" title="Kendo robot demo 1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/Nr7hV41j3Vg" title="Kendo robot demo 2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/CvLhjYJ_pL0" title="Kendo robot demo 3" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.videoWrapper}>
              <iframe src="https://www.youtube.com/embed/Om3l8pWL_yk" title="Kendo robot demo 4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </figure>
        </div>
      </section>

      {/* High power and precision smart actuators */}
      <section className="page-card">
        <h2 className={companyStyles.techItemTitle}>{t('company.actuatorTitle')}</h2>
        <ul className={companyStyles.techList}>
          <li>{t('company.actuatorItem1')}</li>
          <li>{t('company.actuatorItem2')}</li>
          <li>{t('company.actuatorItem3')}</li>
          <li>{t('company.actuatorItem4')}</li>
          <li>{t('company.actuatorItem5')}</li>
          <li>{t('company.actuatorItem6')}</li>
          <li>{t('company.actuatorItem7')}</li>
        </ul>
        <div className={companyStyles.techMediaGrid}>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/smart-actuator-1.jpg" alt="Smart actuator 1" fill style={{ objectFit: 'contain' }} />
            </div>
          </figure>
          <figure className={companyStyles.techFigure}>
            <div className={companyStyles.techImgWrap}>
              <Image src="/images/smart-actuator-2.jpg" alt="Smart actuator 2" fill style={{ objectFit: 'contain' }} />
            </div>
          </figure>
        </div>
      </section>
    </>
  )
}
