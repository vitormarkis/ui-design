import clsx from "clsx"
import st from "./styles.module.css"

export function LandingBorderOriginal() {
  return (
    <div className={st.container}>
      <a className={st.landing_counter_border}>
        <i />
        <div className={clsx(st.content, st.turborepoCardBg)}>
          <div className={st.heading_container}>
            <h1>TURBOREPO</h1>
            <p>High-performance build system for JavaScript and TypeScript codebases.</p>
          </div>
        </div>
      </a>
    </div>
  )
}
