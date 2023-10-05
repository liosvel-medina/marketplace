import { withSetup } from '../tests/test-utils'
import { useWindowSize } from './useWindowSize'

test('windows screen lg', () => {
    const [result, app] = withSetup(() => useWindowSize())
    const { width, screens } = result as any

    expect(width.value, 'initial window width is NOT correct').toBe(1024)

    expect(screens.value.xs, 'the screen IS xs').toBe(false)
    expect(screens.value.sm, 'the screen IS sm').toBe(false)
    expect(screens.value.md, 'the screen IS md').toBe(false)
    expect(screens.value.lg, 'the screen IS NOT lg').toBe(true)
    expect(screens.value.xl, 'the screen IS xl').toBe(false)
    expect(screens.value.xxl, 'the screen IS xxl').toBe(false)

    app?.unmount()

})